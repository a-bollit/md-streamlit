FROM registry.access.redhat.com/ubi8/openjdk-8:1.16-2
USER root
ARG JAR_FILE=target/*.jar
ADD ${JAR_FILE} app.jar
# RUN microdnf install -y yum
# RUN yum install -y iputils
# RUN yum install -y wget
ENTRYPOINT exec java -Djava.ext.dirs=/usr/aplic_ICM/lib/:$JAVA_HOME/jre/lib/ext/ $JAVA_OPTS -jar app.jar