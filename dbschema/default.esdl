module default {
	type User {
		required property email -> str { constraint exclusive };
	}
}