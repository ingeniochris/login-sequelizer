import app from './app';


const Main = async app => {
    await app.listen(app.get('port'));
    console.log(`Server running on ${app.get('port')}`);
}

Main(app);
