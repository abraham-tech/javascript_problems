import grpc
import service_pb2
import service_pb2_grpc

def run():
    with grpc.insecure_channel('localhost:50051') as channel:
        stub = service_pb2_grpc.CalculatorStub(channel)
        response = stub.Add(service_pb2.AddRequest(a=5, b=3))
        print("Sum:", response.result)

if __name__ == '__main__':
    run()
