const readline = require('readline');
const chalk = require('chalk');


const createCoin = require('./functions/coin/coin.js');
const commentfn = require('./functions/comment/comment.js');
const createbuyfn = require('./functions/create&buy/create&buy.js');
const sniperfn = require('./functions/sniper/sniper.js');
const spamfn = require('./functions/spam/spam.js');
const { menufn } = require('./functions/createmenu/menu.js');

menufn();

const createMainMenuInterface = () => {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
};


const asciiArt = `
  _________             __________                  .___.__                
 /   _____/____    _____\\______   \\__ __  ____    __| _/|  |   ___________ 
 \\_____  \\__  \\  /     \\|    |  _/  |  \\/    \\  / __ | |  | _/ __ \\_  __ \\
 /        \\/ __ \\|  Y Y  \\    |   \\  |  /   |  \\/ /_/ | |  |_\\  ___/|  | \\/
/_______  (____  /__|_|  /______  /____/|___|  /\\____ | |____/\\___  >__|   
        \\/     \/      \/       \/           \/      \/           \/        
`;


const mainMenu = () => {
    const rlMain = createMainMenuInterface();  

    console.log(chalk.blue.bold(asciiArt));

    console.log(chalk.green('1. Create Coin'));
    console.log(chalk.yellow('2. Sniper'));
    console.log(chalk.magenta('3. Comment Bot'));
    console.log(chalk.red('4. Create and Buy'));
    console.log(chalk.blue('5. Spam TX'));
    console.log(chalk.green('6. Set Private Key'));
    console.log(chalk.white('0. Exit'));

    rlMain.question(chalk.white('\nChoose an option (1-5 or 0 to exit): '), (answer) => {
        switch (answer) {
            case '1':
                
                rlMain.close();
                createCoin().then(() => {
                    
                    setTimeout(mainMenu, 500);  
                });
                break;
            case '2':
                console.log(chalk.yellow('Starting sniper...'));
                sniperfn.sniperfn()
                rlMain.close();
                break;
            case '3':
                console.log(chalk.magenta('Running comment bot...'));
                commentfn.commentfn()
                rlMain.close();
                break;
            case '4':
                console.log(chalk.red('Creating and buying...'));
                createbuyfn.createbuyfn()
                rlMain.close();
                break;
            case '5':
                console.log(chalk.blue('Spamming transactions...'));
                spamfn.spamfn()
                rlMain.close();
                break;
            case '6':
                console.log(chalk.blue('Enter your new pvt key...'));
                rlMain.close();
                break;
            case '0':
                console.log(chalk.cyan('Exiting the program...'));
                rlMain.close();
                return;
            default:
                console.log(chalk.red('Invalid option, please select a valid option.'));
                rlMain.close();
                break;
        }
    });
};


mainMenu();
