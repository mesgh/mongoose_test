const { Fw } = require('./fw');
async function getFrameworks() {
  const result = await Fw.find();
  console.log(result);
  process.exit(0);
}
getFrameworks().catch(e => console.error('!!!' + e) || process.exit(1));