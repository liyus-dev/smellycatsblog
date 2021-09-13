const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase,{ defaultConfig }) => {
    if(phase === PHASE_DEVELOPMENT_SERVER){
        return {
            env:{
                DB_USER:'admin',
                DB_PASS:'XOGOvZKbougWSFdS',
                DB_NAME:'Testing',
                EMAIL_USER:'jls553090@gmail.com',
                EMAIL_PASS:'zvrpsrnebqrqkwbr'
            }
        }
    }

    return defaultConfig;
}
