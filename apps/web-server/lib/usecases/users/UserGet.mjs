import UseCaseBase from '../UseCaseBase.mjs';
import { spawn } from 'child_process';

// Command to run stress for 20 seconds
const stressCommand = 'stress-ng --cpu 1 --timeout 150s';

// import { User } from '../../models/index.mjs';

export class UserGet extends UseCaseBase {
    static validationRules = {
        uid: ['strict_string'],
    };

    async execute(params) {
        // return new User().load(params);
        const stressProcess = spawn(stressCommand, { shell: true });
        setTimeout(() => {
            stressProcess.kill();
            console.log('Stress tool stopped.');
        }, 150_000); // 20 seconds

        // Listen for process exit event
        stressProcess.on('exit', (code, signal) => {
            console.log(`Stress tool exited with code ${code} and signal ${signal}.`);
        });

        // Listen for process error event
        stressProcess.on('error', (err) => {
            console.error('Error executing stress tool:', err);
        });

        return { get: 'Hello from UserGet'};
    }
}
