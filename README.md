# favotify

- 起動してエミュレータを起動するとき

```
docker-compose up
docker-compose run -p 3000:3000 node-container /bin/bash
```

- 起動済みのコンテナに接続するとき

```
docker ps
docker exec -i -t <CONTAINER ID> /bin/bash
```

- コンテナを停止するとき

```
docker-compose down
```

# 起動

- ローカルでのサーバ立ち上げ

```
npm run dev
```

```
npm install gray-matter --save
```

# 旧リポジトリ

[Favotify](https://github.com/klsh1tt/Favotify)
