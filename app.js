function me(){
    console.log("Priting from me")
}

function you(){
    callback();
}   

you(me);


kubeadm join 192.168.1.101:6443 --token vt2qzz.3dv3b9dao0h9gsgm \
    --discovery-token-ca-cert-hash sha256:8036e0a3c84fce424c457b7a7eeece562887e5b6fe677a406366c6a1cb47a4cc 