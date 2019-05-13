app="muaskin-portal-gateway"
docker stop $app
docker rm $app

docker run --name $app -d \
  -e TZ="Asia/Shanghai" \
  -v /etc/localtime:/etc/localtime:ro \
  -v ${PWD}/conf/config.js:/gateway/config.js \
  -v ${PWD}/dist:/gateway \
  -v ${PWD}/logs:/gateway/logs \
  -w /gateway \
  -p 8081:8080 \
  --entrypoint 'npm' \
  daocloud.io/library/node:8.11.2 \
  -c "start"

