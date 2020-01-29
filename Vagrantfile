# -*- mode: ruby -*-
# vi: set ft=ruby :


Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "ubuntu/xenial64"

  config.vm.define "kube-master" do |kube_master|
    kube_master.vm.hostname = "kube-master"
    kube_master.vm.network "private_network", ip: "192.168.0.101"
    kube_master.vm.synced_folder ".", "/kube"
     config.vm.provider :virtualbox do |vb|
       vb.customize ["modifyvm", :id, "--memory", "1024"]
       vb.customize ["modifyvm", :id, "--cpus", "2"]
    end  
  end
  config.vm.define "kube-node1" do |node1|
    node1.vm.hostname = "kube-node1"
    node1.vm.network "private_network",  ip: "192.168.0.102"
     config.vm.provider :virtualbox do |vb|
       vb.customize ["modifyvm", :id, "--memory", "1024"]
       vb.customize ["modifyvm", :id, "--cpus", "2"]
    end  
  end
  config.vm.define "kube-node2" do |node2|
    node2.vm.hostname = "kube-node2"
    node2.vm.network "private_network", ip: "192.168.0.103"
     config.vm.provider :virtualbox do |vb|
       vb.customize ["modifyvm", :id, "--memory", "1024"]
       vb.customize ["modifyvm", :id, "--cpus", "2"]
    end  
  end

end
