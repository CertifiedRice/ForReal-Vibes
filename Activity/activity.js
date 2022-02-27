module.exports.activity =
    {
        run: (client, args) =>
        {
            setInterval(function()
            {
                const activities_list =
                    [
                        'https://forreal-bots.github.io/',
                        '+help',
                        'with Certified_Rice',
                        `run +help!`,
                        `made by CertifiedRice`,

                    ];
                const activitytype = [
                    'PLAYING',
                    'LISTENING',
                    'WATCHING',
                    'STREAMING',
                ]
                const random = Math.floor(Math.random() * activities_list.length);

                const stat = activities_list[Math.floor(Math.random() * activities_list.length - 1) + 1];
                client.user.setActivity(stat,
                    {
                        type: random,
                        url: 'https://www.twitch.tv/certified_rice',
                    });

            }, 10000);
        }
    }
