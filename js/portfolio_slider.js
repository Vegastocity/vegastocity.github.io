$(function(){
$("#elastic_grid_demo").elastic_grid({	
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
	'items' :
		[
			{
			'title' : 'Adobe Suite',
			'description'   : 'Adobe suite is a collection of programs that is designed in order to make a creator much more efficient in their works. You can see the video I have created using Audition, Premiere, and After Effects <a href="https://drive.google.com/open?id=0B3olD5vRwN0cTFVMeEthOE5hQms">here</a>',
			'thumbnail' : ['img/portfolio/small/Audition.jpg', 'img/portfolio/small/Photoshop.jpg', 'img/portfolio/small/Indesign.jpg', 'img/portfolio/small/1.jpg'],
			'large' : ['img/portfolio/large/Audition.jpg', 'img/portfolio/large/Arise.jpg', 'img/portfolio/large/Indesign.jpg', 'img/portfolio/large/1.jpg'],
			'button_list'   :
			[
			{ 'title':'Download', 'url':'https://mega.nz/#!JB1k3YpD!o9TTdOkFb5CaSdd_BPmeDqgTRid-SzDOb-UO5JjkleQ'}
			],
			'tags'  : ['Adobe','All']
			},
 
            {
				'title' : 'Hardware Installations',
			'description'   : 'Here, you can see my past ventures in assembling computers on my <a href="https://www.youtube.com/user/sam28815">Youtube Channel</a> and see other computer-based tutorials.',
			'thumbnail' : ['img/portfolio/small/computerside.jpg'],
			'large' : ['img/portfolio/large/computerside.jpg'],
			'button_list'   :
			[
			],
			'tags'  : ['All', 'hardware']
			},

			{
			'title' : 'PCPRO Certification',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/PCPRO.jpg', 'img/portfolio/small/CertPCPRO.jpg'],
			'large' : ['img/portfolio/large/PCPRO.jpg', 'img/portfolio/large/CertPCPRO.jpg'],
			'button_list'   :
			[
			{ 'title':'Download', 'url':'https://mega.nz/#!dddmzTBK!TlIBRmlb7a27HvVlEnkEIxWLf1W8LXkBXmYfsZITCss'}
			],
			'tags'  : ['Certifications','All']
			},

			{
			'title' : 'Coding Experience',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/html5.jpg', 'img/portfolio/small/Omnifoods.jpg', 'img/portfolio/small/css3.jpg', 'img/portfolio/small/Javascript.jpg',],
			'large' : ['img/portfolio/large/Programming.jpg', 'img/portfolio/large/Omnifood.jpg', 'img/portfolio/large/css.jpg', 'img/portfolio/large/Javascript.jpg',],
			'button_list'   :
			[
			{ 'title':'Download', 'url':'https://mega.nz/#!IY1ljRKD!Iqy56XGzX_LkbBTklRgyZ1X_hWipirzkMvROIUUh9UY'}
			],
			'tags'  : ['Programming']
			},

			{
			'title' : 'Microsoft Technical Associate Certification',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/MTA.jpg', 'img/portfolio/small/Mob.jpg', 'img/portfolio/small/Fund.jpg'],
			'large' : ['img/portfolio/large/MTA.jpg', 'img/portfolio/large/Mob.jpg', 'img/portfolio/large/Fund.jpg'],
			'button_list'   :
			[
			{ 'title':'Download', 'url':'https://mega.nz/#!MdUQQAZB!yfWp_xjSgplDSc-rwWy7qD578jWdLhR_aXMZ7EySbhk'}
			],
			'tags'  : ['Certifications']
			},

			{
			'title' : 'Microsoft Office Suite Certifications',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/Office.jpg', 'img/portfolio/small/Excel.jpg', 'img/portfolio/small/PowerPoint.jpg', 'img/portfolio/small/Access.jpg', 'img/portfolio/small/Word.jpg'],
			'large' : ['img/portfolio/large/Office.jpg', 'img/portfolio/large/Excel.jpg', 'img/portfolio/large/PowerPoint.jpg', 'img/portfolio/large/Access.jpg', 'img/portfolio/large/Word.jpg'],
			'button_list'   :
			[
			{ 'title':'Download', 'url':'https://mega.nz/#!AI1jjLRa!E2u5YvZYLciu12bXHp0WKS1L_HJFW4qfAuqI3XpY2bE'}
			],
			'tags'  : ['Certifications', 'Microsoft Office']
			},
	 
		]
	});
});