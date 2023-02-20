/** @type {import('./$types').LayoutLoad} */
export function load({ url }) {
  return {
    sections: [
      { slug: 'chess', title: 'Chess' },
      { slug: 'cod', title: 'Call of Duty' },
      { slug: 'dota2', title: 'Dota 2' },
      { slug: 'fifa', title: 'Fifa' },
      { slug: 'fortnite', title: 'Fortnite' },
      { slug: 'gtav', title: 'GTA V' },
      { slug: 'justchatting', title: 'Just Chatting' },
      { slug: 'league', title: 'League' },
      { slug: 'minecraft', title: 'Minecraft' },
      { slug: 'rocketleague', title: 'Rocket League' },
      { slug: 'valorant', title: 'Valorant' },
      { slug: 'wow', title: 'WoW' },
    ],
    pathname: url.pathname.substring(1)
  };
}