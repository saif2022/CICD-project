Following userdata need to be added while creating ec2 linux application server:

```shell
#!/bin/bash
sudo yum update -y
sudo yum install ruby -y
sudo yum install wget -y
sudo yum install aws-cli -y
cd /home/ec2-user
wget https://aws-codedeploy-us-east-1.s3.us-east-1.amazonaws.com/latest/install
sudo chmod +x ./install
sudo ./install auto
```
