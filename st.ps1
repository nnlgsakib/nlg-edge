go run main.go  server --chain genesis.json --libp2p 0.0.0.0:10008 --nat 0.0.0.0 --jsonrpc 0.0.0.0:7545 --seal  --data-dir=node/node1 --grpc-address 0.0.0.0:2338


go run main.go server --chain genesis.json --libp2p 0.0.0.0:10001 --nat 0.0.0.0 --jsonrpc 0.0.0.0:7544 --seal  --data-dir=node/node2 --grpc-address 0.0.0.0:2331

 go run main.go server --chain genesis.json --libp2p 0.0.0.0:10002 --nat 0.0.0.0 --jsonrpc 0.0.0.0:7535 --seal  --data-dir=node/node3 --grpc-address 0.0.0.0:2332

go run main.go server --chain genesis.json --libp2p 0.0.0.0:40001 --nat 0.0.0.0 --jsonrpc 0.0.0.0:5544 --seal  --data-dir=node/node4 --grpc-address 0.0.0.0:2334