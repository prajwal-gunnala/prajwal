import styles from '@/styles/ContactCode.module.css';

const contactItems = [
	{
		social: 'email',
		link: 'prajwal.gunnala@gmail.com',
		href: 'mailto:prajwal.gunnala@gmail.com',
	},
	{
		social: 'github',
		link: 'prajwal-gunnala',
		href: 'https://github.com/prajwal-gunnala',
	},
	{
		social: 'linkedin',
		link: 'prajwal-gunnala',
		href: 'https://www.linkedin.com/in/prajwal-gunnala/',
	},
	{
		social: 'phone',
		link: '+91 9177736419',
		href: 'tel:+919177736419',
	},
];

export default function ContactCode() {
	return (
		<div className={styles.contactCode}>
			{contactItems.map((item) => (
				<div key={item.social} className={styles.contactItem}>
					<span className={styles.social}>{item.social}:</span>
					<a
						href={item.href}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.link}
					>
						{item.link}
					</a>
				</div>
			))}
		</div>
	);
}
