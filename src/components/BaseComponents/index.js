// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

const requireComponent = require.context(
  // The relative path of the components folder
  "./",
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[\w-]+\.vue$/
);

const register = (app) => {
  requireComponent.keys().forEach((fileName) => {
    // Get component config
    const componentConfig = requireComponent(fileName);
    // Get component name
    const componentName = fileName
      .split("/")
      .pop()
      ?.replace(/\.\w+$/, "");

    app.component(componentName, componentConfig.default || componentConfig);
  });
};

export default {
  register,
};
