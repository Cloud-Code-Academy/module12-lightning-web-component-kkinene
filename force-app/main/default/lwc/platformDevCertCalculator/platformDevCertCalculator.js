import { LightningElement } from 'lwc';

const devFundWeight = 0.23;
const processAutoWeight = 0.30;
const userIntWeight = 0.25;
const testDebugWeight = 0.22;

export default class PlatformDevCertCalculator extends LightningElement {
    devFundamentalScore = 50;
    processAutomationScore = 50;
    userInterfaceScore = 50;
    testingScore = 50;

    certificationScore = 50;

    calculateScore() {
        const devFundWeightScore = this.devFundamentalScore * devFundWeight;
        const processAutoWeightScore = this.processAutomationScore * processAutoWeight;
        const userIntWeightScore = this.userInterfaceScore * userIntWeight;
        const testDebugWeightScore = this.testingScore * testDebugWeight;

        this.certificationScore = Math.round(
            devFundWeightScore +
            processAutoWeightScore +
            userIntWeightScore +
            testDebugWeightScore
        );
    }

    handleChange(event) {
        const inputName = event.target.name;
        const value = Number(event.target.value);

        if (isNaN(value) || value < 0 || value > 100) {
            return;
        }

        if (inputName === 'devFundamentals') {
            this.devFundamentalScore = value;
        } else if (inputName === 'processAuto') {
            this.processAutomationScore = value;
        } else if (inputName === 'userInterface') {
            this.userInterfaceScore = value;
        } else if (inputName === 'testDebugDeploy') {
            this.testingScore = value;
        }
    }

    get scoreClass() {
        const baseClasses = 'slds-text-heading_small slds-p-top_small ';
        return this.certificationScore >= 68
            ? baseClasses + 'slds-text-color_success'
            : baseClasses + 'slds-text-color_error';
    }

}