const context = require.context('.', true, /\.js$/);
const modules = {};
context.keys().forEach((file) => {
  // create the module name from file
  const moduleName = file.replace(/(\.\/|\/index\.js$)/g, '');

  // register file context under module name
  modules[moduleName] = context(file).default || context(file);

  // override namespaced option
  // modules[moduleName].namespaced = true;
});

export default modules;
