function numMusicPlaylists(n: number, goal: number, k: number): number {
    const mod = 1e9 + 7; // Use `1e9 + 7` instead of `Math.pow(10, 9) + 7` for accuracy

    // Initialize DP table with 0 instead of null
    let dp: number[][] = Array.from({ length: goal + 1 }, () => Array(n + 1).fill(0));

    dp[0][0] = 1; // Base case

    for (let i = 1; i <= goal; i++) {
        for (let j = 1; j <= Math.min(i, n); j++) {
            // The i-th song is a new song
            dp[i][j] = (dp[i - 1][j - 1] * (n - j + 1)) % mod;

            // The i-th song is a song we have played before
            if (j > k) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j] * (j - k)) % mod;
            }
        }
    }

    return dp[goal][n];
};
