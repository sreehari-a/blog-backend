module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: 'AKIAZ4ZKKBAC2HC72RXP',
          secretAccessKey: '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',
          region: 'us-east-1',
          params: {
            Bucket: 'strapi-images-1457',
          },
        },
      },
    },
    // ...
  });