import { APP_ACCESS_TOKEN } from '$env/static/private'

async function getStreamers(n, id) {
  const url = 'https://api.twitch.tv/helix/streams?first=' + n + '&game_id=' + id;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: " Bearer " + APP_ACCESS_TOKEN,
      'Client-Id': 'inzsbvgt26ismaczn8ndeq8lq6gueh',
    }
  });
  const json = await response.json();
  const streamers = json.data.map(element => element.user_id);
  const names = json.data.map(element => element.user_login);
  const viewers = json.data.map(element => element.viewer_count);
  const language = json.data.map(element => element.language);
  const uptime = json.data.map(element => Date.parse(element.started_at));
  const title = json.data.map(element => element.title);
  let returns = [];
  for (let i = 0; i < streamers.length; i++) {
    returns.push({
      user_id: streamers[i], user_name: names[i], viewer_count: viewers[i]
      , language: language[i], uptime: uptime[i], title: title[i]
    })
  }

  return returns
}

async function getStreamersAllCategories(n) {
  const url = 'https://api.twitch.tv/helix/streams?first=' + n

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: " Bearer " + APP_ACCESS_TOKEN,
      'Client-Id': 'inzsbvgt26ismaczn8ndeq8lq6gueh',
    }
  });
  const json = await response.json();
  const streamers = json.data.map(element => element.user_id);
  const names = json.data.map(element => element.user_login);
  const viewers = json.data.map(element => element.viewer_count);
  const language = json.data.map(element => element.language);
  const uptime = json.data.map(element => Date.parse(element.started_at));
  const title = json.data.map(element => element.title);
  let returns = [];
  for (let i = 0; i < streamers.length; i++) {
    returns.push({
      user_id: streamers[i], user_name: names[i], viewer_count: viewers[i]
      , language: language[i], uptime: uptime[i], title: title[i]
    })
  }

  return returns
}

async function getImageURL(id) {
  const url = "https://api.twitch.tv/helix/users?id=" + id;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: " Bearer " + APP_ACCESS_TOKEN,
      "Client-Id": "inzsbvgt26ismaczn8ndeq8lq6gueh",
    },
  });
  const json = await response.json();
  const image_url = json.data[0].profile_image_url;
  return image_url;
}

export async function getStreams(n, id) {
  let streamers = await getStreamers(n, id);
  let user_ids = []
  let user_names = []
  let viewers = []
  let languages = []
  let uptimes = []
  let titles = []
  for (let i = 0; i < streamers.length; i++) {
    user_ids.push(streamers[i].user_id);
    user_names.push(streamers[i].user_name);
    viewers.push(streamers[i].viewer_count);
    languages.push(streamers[i].language);
    uptimes.push(streamers[i].uptime);
    titles.push(streamers[i].title)
  }
  let urls = await Promise.all(user_ids.map(getImageURL));

  let streams = [];
  for (let i = 0; i < streamers.length; i++) {
    streams.push({
      user_id: user_ids[i], user_name: user_names[i], url: urls[i], viewer_count: viewers[i],
      language: languages[i], uptime: uptimes[i], title: titles[i]
    })
  }

  return streams
}

export async function getStreamsAllCategories(n) {
  let streamers = await getStreamersAllCategories(n);
  let user_ids = []
  let user_names = []
  let viewers = []
  let languages = []
  let uptimes = []
  let titles = []
  for (let i = 0; i < streamers.length; i++) {
    user_ids.push(streamers[i].user_id);
    user_names.push(streamers[i].user_name);
    viewers.push(streamers[i].viewer_count);
    languages.push(streamers[i].language);
    uptimes.push(streamers[i].uptime);
    titles.push(streamers[i].title)
  }
  let urls = await Promise.all(user_ids.map(getImageURL));

  let streams = [];
  for (let i = 0; i < streamers.length; i++) {
    streams.push({
      user_id: user_ids[i], user_name: user_names[i], url: urls[i], viewer_count: viewers[i],
      language: languages[i], uptime: uptimes[i], title: titles[i]
    })
  }

  return streams
}
