/**
 * Checks if a given string is a valid IPv4 address.
 * @param address - The address to check.
 * @returns True if the address is a valid IPv4 address, false otherwise.
 */

export function isIPv4Address(address: string): boolean {
    const ipv4Regex = /^(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/;
    return ipv4Regex.test(address);
}
