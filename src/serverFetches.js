export async function getUpperLimit(execution, connectionType) {
    if (execution && connectionType) {
        console.log('ищем верхний предел')
        try {
            const response = await fetch('https://emk.websto.pro/DBep', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify({
                    a: ['ЭП4', execution, connectionType]
                })
            })
            const data = await response.json()
            return data.ans
        } catch (error) {
            console.error('Ошибка при получении данных:', error)
        }
    }
}

export async function getVpower(execution, connectionType, upperLimit) {
    console.log('ищем мощность')
    if (execution && connectionType && upperLimit) {
        try {
            const response = await fetch('https://emk.websto.pro/DBep', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify({
                    a: ['ЭП4', execution, connectionType, upperLimit]
                })
            })
            const data = await response.json()
            return data.ans
        } catch (error) {
            console.error('Ошибка при получении данных:', error)
        }
    }
}

export async function getRotationFrequency(execution, connectionType, upperLimit, vPower = 0, expression) {
    if (execution && connectionType && upperLimit) {
        !expression ? expression = 1 / 60 : expression;
        console.log('выражение:' + expression);
        try {
            const response = await fetch('https://emk.websto.pro/DBep', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify({
                    a: ['ЭП4', execution, connectionType, upperLimit, vPower]
                })
            });
            const data = await response.json();
            const res = data.ans.filter((item) => item > Math.round(expression));
            return res;
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    }
}

export async function getConstructiveScheme(execution, connectionType, upperLimit, vPower = 0, rotationFrequency) {
    if (execution && connectionType && upperLimit && rotationFrequency) {
        console.log('ищем схему');
        try {
            const response = await fetch('https://emk.websto.pro/DBep', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify({
                    a: ['ЭП4', execution, connectionType, upperLimit, vPower, rotationFrequency]
                })
            });
            const data = await response.json();
            const res = []; // Инициализируем пустой массив
            const formattedData = data.ans.map(item => ({
                name: item, value: item, img: `/public/img/ep4-scheme-${item}.png`,
            }));
            res.push(...formattedData);
            console.log(res);
            return res;
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    }
}

export async function getFlange(execution, connectionType, upperLimit, vPower = 0, rotationFrequency, scheme) {
    if (execution && connectionType && upperLimit && rotationFrequency && scheme) {
        console.log('ищем фланец');
        try {
            const response = await fetch('https://emk.websto.pro/DBep', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify({
                    a: ['ЭП4', execution, connectionType, upperLimit, vPower, rotationFrequency, scheme]
                })
            });
            const data = await response.json();
            const res = []; // Инициализируем пустой массив
            data.ans.map(item => (res.push(item)));
            console.log(res);
            return res;
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    }
}
