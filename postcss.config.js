module.exports = () => ({
    map: process.env.NODE_ENV === 'development',
    plugins: {
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-normalize': {},
        'postcss-preset-env': {stage: 1},
        'postcss-reporter': {clearReportedMessages: true},
    },
});
