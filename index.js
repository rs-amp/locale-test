const dc = require("dc-management-sdk-js");
const fs = require("fs");
const promisify = require("util").promisify;

async function test() {
  console.log(JSON.stringify(process.argv));

  console.log("Setting up client.");
  const client = new dc.DynamicContent({
    client_id: process.argv[2],
    client_secret: process.argv[3],
  });

  console.log("Fetching repo.");
  const repo = await client.contentRepositories.get(process.argv[4]);

  console.log(`Reading content from ${process.argv[5]}.`);
  const item = await promisify(fs.readFile)(process.argv[5], { encoding: "utf-8" });

  const contentJSON = JSON.parse(item);

  const filteredContent = {
    id: contentJSON.id,
    label: contentJSON.label,
    locale: contentJSON.locale,
    body: contentJSON.body,
    deliveryId: null,
    folderId: null,
  };

  console.log("Creating content item.");

  const result = await repo.related.contentItems.create(filteredContent);

  console.log('Finished creating item.');

  console.log(JSON.stringify(result));
}

test();
