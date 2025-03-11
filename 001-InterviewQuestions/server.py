import grpc
from concurrent import futures
import service_pb2
import service_pb2_grpc

class CalculatorServicer(service_pb2_grpc.CalculatorServicer):
    def Add(self, request, context):
        result = request.a + request.b
        return service_pb2.AddResponse(result=result)

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    service_pb2_grpc.add_CalculatorServicer_to_server(CalculatorServicer(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    print("Server started on port 50051...")
    server.wait_for_termination()

if __name__ == '__main__':
    serve()
