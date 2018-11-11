FROM nodejs:8

RUN mv /opt/app-root/src /opt/app-root/src1 && \
	mkdir /opt/app-root/src && \
	cd /opt/app-root/src1 && \
	npm install && \
	cp -av dist/* /opt/app-root/src 
