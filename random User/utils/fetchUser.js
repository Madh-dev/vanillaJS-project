let url = 'https://randomuser.me/api/';

async function fetchUser() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        const person = data.results[0];
        const { first, last } = person.name;
        const { phone, email } = person;
        const {
            street: { number, name }
        } = person.location;
        const { age } = person.dob;
        const { large: image } = person.picture;
        const { password } = person.login;

        return {
            name: `${first} ${last}`,
            phone,
            email,
            street: `${number}, ${name}`,
            age,
            image,
            password
        }
    } catch (error) {
        console.error('Error fetching user data:', error.message,error.stack);
        return {
            name: 'N/A',
            phone: 'N/A',
            email: 'N/A',
            street: 'N/A',
            age: 'N/A',
            image: 'https://via.placeholder.com/150', // Placeholder image for fallback
            password: 'N/A'
        }
    }
}
export default fetchUser;