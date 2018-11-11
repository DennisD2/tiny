#FROM nodejs#
FROM centos/nodejs-8-centos7

ENV NODE_HOME=/opt/rh/rh-nodejs8/root/usr

RUN mv /opt/app-root/src /opt/app-root/src1 && \
	mkdir /opt/app-root/src && \
	cd /opt/app-root/src1 && \
	export PATH=${NODE_HPOME}/bin:${PATH} 
	#npm install && \
	#cp -av dist/* /opt/app-root/src 
