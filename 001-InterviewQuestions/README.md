# Understanding GRPC communication 

- GRPC is a type of RPC developed by Google, it is mainly used for interservice communication. 
- Client Stub: Converts local procedure calls into RPC requests.
- Server Stub: Receives RPC requests and invokes the actual function.
- Transport Mechanism: Handles message passing (e.g., HTTP, TCP).
- Serialization: Data is converted to a transmittable format (e.g., JSON, Protobuf).

## install dependencies 

``` sh
pip install grpcio grpcio-tools
```

- Run the following command to generate Python code from the .proto file

``` sh
python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. service.proto
```
Start the server:
``` sh
python server.py
```

Run the client:
```sh
python client.py
```
