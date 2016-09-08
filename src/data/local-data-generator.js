const fs = require('fs')
const data = []

for (let i = 1; i <= 20; i++) {
	let options = ['a', 'b', 'c', 'd']
	data.push({
		id: i,
		question: 'question-' + i.toString().repeat(8),
		options: options.map(option => 'question-' + option.repeat(5) + '-' + i),
		images: ['./src/images/img' + i.toString().repeat(8) + '.jpg']
	})
}
fs.writeFile('./questions.json', JSON.stringify(data, null, '  '))
