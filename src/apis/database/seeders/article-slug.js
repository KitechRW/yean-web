const generateSlugUrl = (title, id) => {
    const slug = title.toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return `${slug}-${id}`;
}

module.exports = {
    up: async (queryInterface) => {
        try {
            // Use proper QueryInterface method to select all articles
            const articles = await queryInterface.sequelize.query(
                'SELECT id, title FROM article',
                { type: queryInterface.sequelize.QueryTypes.SELECT }
            );

            // Update each article with its slug
            for (const article of articles) {
                const slug = generateSlugUrl(article.title, article.id);
                await queryInterface.bulkUpdate(
                    'article',
                    { slug },
                    { id: article.id }
                );
            }
        } catch (error) {
            console.log(error);
        }
    },
    down: async (queryInterface) => {
        await queryInterface.update('article', { slug: null }, { where: {} });
    }
};