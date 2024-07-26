import {IValidationResponse} from 'Api/dist/utils/validate-code';

export async function validateCode(code: string, language: string): Promise<IValidationResponse> {
    try {
        const response = await fetch('http://localhost:3000/validate-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8080', // Specify the origin of your frontend application
            },
            body: JSON.stringify({code, language}),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        return {
            success: false,
            message: 'There was a problem with your fetch operation'
        };
    }
}
