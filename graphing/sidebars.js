module.exports = {
    docs: [
        {
            type: 'category',
            label: 'General',
            items: [
                'about',
                'stack',
            ],
        },
        {
            type: 'category',
            label: 'Server Docs',
            items: [
                'server/starting',
                'server/middleware',
                'server/schema',
                'server/mongo-model',
                'server/root-query',
                'server/mutations',
            ],
        },
        {
            type: 'category',
            label: 'Client Docs',
            items: [
                'client/starting-client',
                {
                    Components: [
                        'client/components/App',
                        'client/components/AddBook',
                        'client/components/BookList',
                        'client/components/BookDetails',
                    ],
                }
            ],
        },
    ],
};
