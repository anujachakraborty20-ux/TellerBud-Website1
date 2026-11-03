import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
} from "@firebase/rules-unit-testing";

const customerId = "test_customer_001";
const documentPath = `users/${customerId}`;

const testEnv = await initializeTestEnvironment({
  projectId: "demo-tellerbud",
  firestore: {
    host: "127.0.0.1",
    port: 8080,
    rules: readFileSync(new URL("./firestore.rules", import.meta.url), "utf8"),
  },
});

try {
  await testEnv.withSecurityRulesDisabled(async (context) => {
    await context.firestore().doc(documentPath).set({
      displayName: "Test Customer",
    });
  });

  const owner = testEnv.authenticatedContext(customerId).firestore();
  const otherUser = testEnv.authenticatedContext("test_customer_002").firestore();
  const signedOut = testEnv.unauthenticatedContext().firestore();

  const document = await assertSucceeds(owner.doc(documentPath).get());
  assert.equal(document.data()?.displayName, "Test Customer");

  await assertFails(otherUser.doc(documentPath).get());
  await assertFails(signedOut.doc(documentPath).get());
  await assertFails(owner.collection("users").get());
  await assertFails(owner.doc(documentPath).update({ displayName: "Changed" }));

    const profiles = [
    {
      collection: "customerProfiles",
      uid: customerId,
      fields: { homeCity: "Lusaka", identityVerificationStatus: "pending" },
    },
    {
      collection: "agentProfiles",
      uid: "test_agent_001",
      fields: { serviceCity: "Kitwe", approvalStatus: "pending" },
    },
  ];

  for (const profile of profiles) {
    const path = `${profile.collection}/${profile.uid}`;

    await testEnv.withSecurityRulesDisabled(async (context) => {
      await context.firestore().doc(path).set(profile.fields);
    });

    const profileOwner = testEnv.authenticatedContext(profile.uid).firestore();
    const snapshot = await assertSucceeds(profileOwner.doc(path).get());
    assert.deepEqual(snapshot.data(), profile.fields);

    await assertFails(otherUser.doc(path).get());
    await assertFails(signedOut.doc(path).get());
    await assertFails(profileOwner.collection(profile.collection).get());
    await assertFails(profileOwner.doc(path).update({ updatedAt: new Date() }));
  }

  console.log("PASS: Owner-only reads verified for users, customers, and agents.");

} finally {
  await testEnv.cleanup();
}