module.exports = {
  transform: async (input) => {
    const code = typeof input === 'string' ? input : (input && (input.code || input.css)) || '';
    return { code, map: null };
  },
  transformSync: (input) => {
    const code = typeof input === 'string' ? input : (input && (input.code || input.css)) || '';
    return { code, map: null };
  },
  compile: () => ({ code: '', map: null })
};
module.exports.default = module.exports;
