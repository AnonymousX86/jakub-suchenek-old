export function hashToSrcset(hash: string): string[] {
  const newSet = []
  // noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
  const sizes1 = [ "h", "l", "m", "t" ]
  const sizes2 = [ "1024", "640", "320", "160" ]
  for (const i in sizes1)
    newSet.push(`https://i.imgur.com/${hash}${sizes1[i]}.jpg ${sizes2[i]}w`)
  return newSet
}
