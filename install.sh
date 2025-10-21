chmod +x cts
mkdir ~/.hidden
mv cts ~/.hidden/
echo "alias cts='bash ~/.hidden/cts'" >> ~/.bashrc

source ~/.bashrc
