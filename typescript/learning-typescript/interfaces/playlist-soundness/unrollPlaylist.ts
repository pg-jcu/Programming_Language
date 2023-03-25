export interface Song {
  artist: string | string[];
  length: number;
  name: string;
  type: "song";
}

export interface Album {
  songs: Song[];
  type: "album";
}

export interface Playlist {
  resolve: () => Song[];
  type: "playlist";
}

export type Items = (Song | Album | Playlist)[];

export interface Artists {
  [artist: string]: string[];
}

export interface ResultPlaylist {
  artists: Artists;
  songs: string[];
  time: number;
}

export function unrollPlaylist(items: Items): ResultPlaylist {
  const artists: Artists = {};
  const songs: string[] = [];
  let time = 0;

  for (const item of items) {
    switch (item.type) {
      case "song":
        time += item.length;
        songs.push(item.name);

        if (typeof item.artist === "string") {
          if (item.artist in artists) {
            artists[item.artist].push(item.name);
          } else {
            artists[item.artist] = [item.name];
          }
        } else {
          for (const artist of item.artist) {
            if (artist in artists) {
              artists[artist].push(item.name);
            } else {
              artists[artist] = [item.name];
            }
          }
        }
        break;
      case "album":
        for (const song of item.songs) {
          time += song.length;
          songs.push(song.name);

          if (typeof song.artist === "string") {
            if (song.artist in artists) {
              artists[song.artist].push(song.name);
            } else {
              artists[song.artist] = [song.name];
            }
          } else {
            for (const artist of song.artist) {
              if (artist in artists) {
                artists[artist].push(song.name);
              } else {
                artists[artist] = [song.name];
              }
            }
          }
        }
        break;
      case "playlist":
        for (const song of item.resolve()) {
          time += song.length;
          songs.push(song.name);

          if (typeof song.artist === "string") {
            if (song.artist in artists) {
              artists[song.artist].push(song.name);
            } else {
              artists[song.artist] = [song.name];
            }
          } else {
            for (const artist of song.artist) {
              if (artist in artists) {
                artists[artist].push(song.name);
              } else {
                artists[artist] = [song.name];
              }
            }
          }
        }
        break;
    }
  }

  return {
    artists,
    songs,
    time,
  };
}
