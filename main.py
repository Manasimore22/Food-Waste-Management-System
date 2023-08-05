import threading
import time
from concurrent.futures import ThreadPoolExecutor
from app1 import app as app1
from app2 import app as app2

def run_app1():
    app1.run(port=5000)

def run_app2():
    app2.run(port=5001, use_reloader=False)

if __name__ == '__main__':
    executor = ThreadPoolExecutor(max_workers=2)
    future_app1 = executor.submit(run_app1)
    time.sleep(1) 
    future_app2 = executor.submit(run_app2)

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        executor.shutdown(wait=False)
        print("\nServer shutdown completed.")
