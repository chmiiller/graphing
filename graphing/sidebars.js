module.exports = {
    docs: [
        {
            type: 'category',
            label: 'General',
            collapsed: false,
            items: [
                'about',
                'stack',
            ],
        },
        {
            type: 'category',
            label: 'Server',
            collapsed: false,
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
            label: 'Client',
            collapsed: false,
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
