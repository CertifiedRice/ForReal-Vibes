module.exports.activity =
    {
        run: (client, args) =>
        {
            setInterval(function()
            {
                const activities_list =
                    [
                        '+help',
                        `with [${client.guilds.cache.first().memberCount}] members`,
                        'with Certified_Rice',
                    ];
                const stat = activities_list[Math.floor(Math.random() * activities_list.length - 1) + 1];
                client.user.setActivity(stat,
                    {
                        type: 'STREAMING',
                        url: 'https://www.twitch.tv/certified_rice'
                    });
            }, 10000);
        }
    }