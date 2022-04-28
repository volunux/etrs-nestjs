import { Express } from 'express';
import { Session , SessionData } from 'express-session';
import { ShoppingCart } from '../../model/ShoppingCart';

declare module 'express-session' {

	interface SessionData {
		cart : ShoppingCart
	}

}