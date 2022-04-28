import { ParsedQs } from 'qs';
import { UserSession } from '../../model/UserSession';

export interface EntityQueryConfig {
	init(variables: ParsedQs): EntityQueryConfig;
	existsParameter(porameter: string): boolean;
	getParameter(parameter: string): string | string[] | null;
	getParameterList(): Map<string, string | string[]>;
	getParameters(parameter: string): string[] | null;
	getUserPrincipal(): UserSession | null;
}