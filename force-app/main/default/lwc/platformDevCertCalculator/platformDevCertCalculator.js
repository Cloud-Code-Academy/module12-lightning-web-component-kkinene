// Import the LightningElement base class from LWC
import { LightningElement } from 'lwc';

// Define weight constants for each exam section based on exam blueprint percentages
const devFundWeight = 0.23;
const processAutoWeight = 0.30;
const userIntWeight = 0.25;
const testDebugWeight = 0.22;

// Define the main component class
export default class PlatformDevCertCalculator extends LightningElement {
    // Default input scores for each exam section (initially set to 50%)
    devFundamentalScore = 50;
    processAutomationScore = 50;
    userInterfaceScore = 50;
    testingScore = 50;

    // Overall certification score (calculated total, initially 50%)
    certificationScore = 50;

    // Method to calculate the final certification score using weighted values
    calculateScore() {
        // Multiply each input score by its respective weight
        const devFundWeightScore = this.devFundamentalScore * devFundWeight;
        const processAutoWeightScore = this.processAutomationScore * processAutoWeight;
        const userIntWeightScore = this.userInterfaceScore * userIntWeight;
        const testDebugWeightScore = this.testingScore * testDebugWeight;

        // Add all weighted scores and round to nearest whole number
        this.certificationScore = Math.round(
            devFundWeightScore +
            processAutoWeightScore +
            userIntWeightScore +
            testDebugWeightScore
        );
    }

    // Event handler for input changes; updates the correct property based on input name
    handleChange(event) {
        const inputName = event.target.name;
        const value = Number(event.target.value);

        // Ensure input is a valid number between 0 and 100
        if (isNaN(value) || value < 0 || value > 100) {
            return;
        }

        // Update the corresponding score based on which input was changed
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

    // Getter to return the CSS classes for the final score based on pass/fail
    get finalScoreClass() {
        const baseClass = 'slds-form-element__label slds-text-title_bold'; // Base SLDS styling
        const colorClass = this.certificationScore >= 68
            ? 'slds-text-color_success'  // Green if score is passing (68% or higher)
            : 'slds-text-color_error';   // Red if score is failing

        return `${baseClass} ${colorClass}`; // Combine base and conditional color classes
    }
}
