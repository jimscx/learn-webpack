var config = require('../config/testText.conf.json');
export default function()	{
	var greet = document.createElement('div');
	greet.textContent = "hi" + config.name + "我知道你今年" + config.age + "岁了奥！";
	console.log(config)
	return greet;
}