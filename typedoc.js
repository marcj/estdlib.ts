module.exports = {
    "mode": "modules",
    "out": "docs",
    exclude: [
        '**/node_modules/**',
        '**/*.spec.ts',
    ],
    name: 'estdlib.ts',
    excludePrivate: true,
    skipInternal: true,
    // theme: 'minimal'
};
