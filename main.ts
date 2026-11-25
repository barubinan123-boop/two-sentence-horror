import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

// Two-Sentence Horror — entry for make.fun bounty
// u-suroto-two-sentence-horror-acea9253
//
// The story: a mundane errand (picking up a dead dog's ashes) turns on one
// quiet realization — Daniel owns two identical dogs and never told the vet
// which one was Biscuit. The second sentence makes the first worse on a
// re-read: the ashes may be the wrong dog, or the warm weight asleep on his
// feet may not be his dog at all. Nothing is explained; the reader fills in
// the worst of it.

const STORY =
  "The vet called to say Biscuit's ashes were ready for pickup, and Daniel thanked her and hung up. " +
  'Then he looked down at the dog asleep on his feet and realized he had never told the vet which of his two identical dogs was Biscuit.'

const outDir = '/output'
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, 'entry.txt'), STORY, 'utf8')
