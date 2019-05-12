# Calculator


Open a terminal.

---

*Directions from: **https://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi/***

To install node run the following commands:
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install -y nodejs
```
Run `node -v` to ensure it is installed.

---

*Directions from **https://yarnpkg.com/en/docs/install#alternatives-stable***

To install Yarn run the following command:
```
curl -o- -L https://yarnpkg.com/install.sh | bash
```
Start a fresh terminal and then run `yarn -v` to ensure it is installed.

---

Enter `cd ~/Documents` to move to the Documents folder.

To install the Calculator pacakge run the following command:
```
git clone https://github.com/MJones180/Calculator.git
```
Enter `cd Calculator`, this will put you in the repo's directory.

---

Run the command `yarn` once you are in the new directory, this will install all of the necessary dependencies *(this make take a few minutes)*.

---

Once the dependencies have finished installing, run the command `yarn start` to start your calculator.

When you dev server has started up, open your browser and go to `localhost:3141` to view your calculator.

To end the program, enter <kbd>CTRL</kbd> + <kbd>C</kbd> in your terminal.
