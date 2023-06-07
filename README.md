# Lab 4 tests

To test application behavior with "sick" pod you need:

1. Start app with helm
   
    ```
    helm install local Helm/helm/v3
    ```

2. Run test script with
    
   ```
    node tests/main.js
   ```

### Results

With "healthy" pod: 

Average execution time: 5.09 milliseconds

With "sick" pod:

First requsts is returned with delay of 10 seconds. Then load balancer redirect requests to second pod:

Request 1: duration: 96

Request 2: duration: 7

Request 3: duration: 5

Request 4: duration: 6

Request 5: duration: 6

...

Average execution time: 5.52 milliseconds
